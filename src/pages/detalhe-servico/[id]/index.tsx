import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import ButtonGold from "@/pages/components/ButtonGold";
import {useRouter} from "next/router";

const DetalheServico = () => {
    const router = useRouter();
    const RedirectAgenda = () => {
        router.push("/servico/agendar");
    }
    return(
        <>
            <Header></Header>
            <main className="d-flex  flex-row align-items-center justify-content-center container-fluid" style={{height:'78.7vh', backgroundColor:'var(--preto-fundo)'}}>
                <div style={{width:'80%'}} className="d-flex flex-row align-items-center z-2">
                <div className="col-6">
                    <div className="position-absolute z-1" style={{border:"1px solid #DBB002",
                                 width:'420px',
                                 height:'420px',
                                 borderRadius:'10px',
                    }}></div>
                    <img className="position-relative z-2 " src="/imgs/loirinhaCovarde.png" alt="Mulher modelo"/>
                </div>
                <div className="col-6">
                    <p className="gradient-text">Ondas e Cachos Perfeitos com Elegância</p>
                    <h3>BABY LISS Profissional </h3>
                    <p className="opacity-75">Transforme seu visual com curvas definidas, movimento natural e brilho
                        intenso. Nossa finalização com Baby Liss proporciona um acabamento
                        sofisticado, valorizando sua beleza com leveza, estilo e durabilidade.</p>
                    <div className="mt-5"><ButtonGold value="AGENDE AGORA" type={"button"} onClick={RedirectAgenda}></ButtonGold></div>
                </div>
                </div>
                <svg width="1898" height="273" viewBox="0 0 1898 273" fill="none" xmlns="http://www.w3.org/2000/svg" className="position-absolute z-0" style={{top:'580px'}}  >
                    <path d="M719.089 2.04256C1508.25 558.985 2304.25 -24.0046 1663.66 270.043C1972.93 -96.9376 0.40625 242.837 0.40625 242.837" stroke="#AB8B50" stroke-width="5"/>
                </svg>

            </main>
            <Footer></Footer>
        </>
    )
}
export default DetalheServico;