import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-2xl md:text-3xl text-center mt-10 px-4">
        Click <span className="font-bold">LOG IN</span> to check
        functionality of the Login/Register page. <br />
        <span className="font-bold">Post</span> page is functional
        only when user is logged in.
      </h1>
    </>
  );
}
