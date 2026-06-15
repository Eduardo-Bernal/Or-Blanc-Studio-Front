import Header from "@/pages/components/Header";

const Home = () => {
    return (
        <>
            <Header></Header>
            <main className="vh-100">
                <section className="h-100 container" style={{ backgroundColor: "var(--preto-fundo)" }}>
                    <img className="h-40 col-12" src="/imgs/ImageHome.png" alt=""/>
                </section>
            </main>
        </>
    )
}

export default Home;