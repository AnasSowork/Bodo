import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveBlocks = new Liveblocks({
    secret:
        "sk_prod_IC1eFUIE8XTl7o8q3O4ffsb0N5a9eghhJnmcvZRwBd1n5S2YK17vrFiTHURDerQg",
});

export async function POST(request: Request) {
    const authorization = auth();
    const user = await currentUser();

    console.log("AUTH_INFO", {
        authorization,
        user,
    });

    if (!authorization || !user) {
        return new Response("Unauthorized", { status: 403 });
    }

    const { room } = await request.json();

    const board = await convex.query(api.board.get, { id: room });

    console.log("AUTH_INFO", {
        room,
        board,
        boardOrgId: board?.orgId,
        userOrgId: authorization.orgId,
    });

    if (board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized", { status: 403 });
    }

    const userInfo = {
        name: user.firstName || "Teammate",
        picture: user.imageUrl,
    };

    console.log({ userInfo });

    const session = liveBlocks.prepareSession(user.id, { userInfo });

    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    console.log({ status, body }, "ALLOWED");

    return new Response(body, { status });
}
