import Navbar from "@/components/Navbar/Navbar";

type Props = {
    children: React.ReactNode
};

const UserLayout = ({ children }: Props) => {
    return (
        <div className="h-3/4 bg-transparent rounded">

            <Navbar />
            {children}
        </div>
    )
}
export default UserLayout