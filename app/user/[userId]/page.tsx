import UserPage from "../page"

type Props = {
    params: {
        userId: string
    }
}



const UserProfile = (props: Props) => {
    return (
        <main>
            <h1 className="text-center mt-5 text-2xl">Profile Page</h1>
            <UserPage />
        </main>
    )
}

export default UserProfile