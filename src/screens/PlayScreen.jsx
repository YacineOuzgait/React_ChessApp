import ChessBoard from "../components/layouts/ChessBoard";
import PlayerZone from "../components/layouts/PlayerZone";

const PlayScreen = () => {

    return (
        <>
            <PlayerZone />
            <ChessBoard />
            <PlayerZone />
        </>


    );
}

export default PlayScreen;