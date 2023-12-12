import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="bg-[#212121]  " >
     {/* <Header   /> */}
      <main className="" >
        {props.children}
      </main>
     
    </div>
  );
}

export default Layout;