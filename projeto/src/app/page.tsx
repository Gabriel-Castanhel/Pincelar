import Background from "./Components/Background/Background";
import Header from "./Components/Header/page";
import BackgroundMusic from "./Components/MusicBg/MusicBg";
import MusicPlayer from "./Components/SilencButon/Buton";


export default function Home() {
    return (
        <>
            <Background />
            <BackgroundMusic />
            <MusicPlayer />
            <main>
                <Header />

            </main>
        </>
    )
}