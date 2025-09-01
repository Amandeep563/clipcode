import { getSession } from "@/lib/auth";
import { Header } from "./header";
import { User } from "@/types/auth";

export const AuthHeader = async () => {
    const session = await getSession();

    if (!session?.user) {
        return <Header isLoggedIn={false} />;
    }

    const user: User = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image ?? undefined,
        emailVerified: session.user.emailVerified,
        createdAt: new Date(session.user.createdAt),
        updatedAt: new Date(session.user.updatedAt),
    };

    return <Header isLoggedIn={true} user={user} />;
};
