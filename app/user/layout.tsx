type Props = {
    children: React.ReactNode
};

const UserLayout = ({ children }: Props) => {
    return (
        <div className="h-screen bg-blue-500">
            <h1>User Page</h1>
            {children}
        </div>
    )
}
export default UserLayout