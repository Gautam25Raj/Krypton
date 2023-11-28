export const metadata = {
  title: "Krypton",
  description: "By Bankless DAO",
};

export default function LandingLayout({ children }) {
  return (
    <div className="w-full 2xl:px-[18%] px-5 flex flex-col">{children}</div>
  );
}
