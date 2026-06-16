import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import ButtonGold from "@/pages/components/ButtonGold";

const DetalheServico = () => {
    return(
        <>
            <Header></Header>
            <main>
                <div >
                    <div></div>
                    <img src="/imgs/loirinhaCovarde.png" alt="Mulher modelo"/>
                </div>
                <div>
                    <p>Ondas e Cachos Perfeitos com Elegância</p>
                    <h3>BABY LISS Profissional </h3>
                    <p>Transforme seu visual com curvas definidas, movimento natural e brilho
                        intenso. Nossa finalização com Baby Liss proporciona um acabamento
                        sofisticado, valorizando sua beleza com leveza, estilo e durabilidade.</p>
                    <div><ButtonGold value="AGENDE AGORA" type={"button"} ></ButtonGold></div>

                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default DetalheServico;