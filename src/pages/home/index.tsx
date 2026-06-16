import Header from "@/pages/components/Header";

const Home = () => {
    return (
        <>
            <Header></Header>
                <main className="vh-100" style={{ backgroundColor: "var(--preto-fundo)" }}>
                <section className="h-75 d-flex align-items-center flex-column justify-content-center h-75 container" >
                    <img className="h-100 col-12 object-fit-lg-cover" src="/imgs/ImageHome.png" alt=""/>
                    <div className="col-10 position-relative d-flex justify-content-between p-4 z-3 glass" style={{bottom: "50px"}}>
                        <div className="col-6 d-flex flex-column">
                            <label className="text-white" htmlFor="">Selecione o Serviço</label>
                            <input className="bg-transparent border border-0 text-white" type="text" placeholder="Digite..."/>
                        </div>
                        <div className="col-6 d-flex flex-column">
                            <label className="text-white" htmlFor="">Selecione o Profissional</label>
                            <input className="bg-transparent border border-0 text-white" type="text" placeholder="Digite..."/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;