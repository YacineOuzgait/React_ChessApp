import '../styles/ChessBoard.css';

function ChessBoard () {

     
    return (
        <body>
              
         
        <table>
            <tr>
                <td class="white" id="w08"><div onClick="reply_click(this.id)"><img id="w08" class="image" src="assets/img/TourNoir.png" alt="tour" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="b16" class="image" src="assets/img/CavalierNoir.png" alt="cavalier" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="w24" class="image" src="assets/img/FouNoir.png" alt="fou" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="b32" class="image" src="assets/img/DameNoir.png" alt="dame" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="40" class="image" src="assets/img/RoiNoir.png" alt="roi" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="48" class="image" src="assets/img/FouNoir.png" alt="fou" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="56" class="image" src="assets/img/CavalierNoir.png" alt="cavalier" /></div></td>
                <td class="blue" id="b64"><div onClick="reply_click(this.id)"><img id="64" class="image" src="assets/img/TourNoir.png" alt="tour" /></div></td>
            </tr>
            <tr>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="07" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="15" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="23" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="31" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="39" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="47" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="55" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="63" class="image" src="assets/img/pionNoir.png" alt="pionNoir" /></div></td>
           </tr>
           <tr>
                <td class="white"><div onClick="reply_click(this.id)"><img id="06" class="image" src="assets/img/Noimage.png"/></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="14" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="22" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="30" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="38" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="46" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="54" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="62" class="image" src="assets/img/Noimage.png" /></div></td>
           </tr>
           <tr>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="05" class="image" src="assets/img/Noimage.png"/></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="13" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="21" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="29" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="37" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="45" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="53" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="61" class="image" src="assets/img/Noimage.png" /></div></td>
           </tr>
           <tr>
                <td class="white"><div onClick="reply_click(this.id)"><img id="04" class="image" src="assets/img/Noimage.png"/></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="12" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="20" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="28" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="36" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="44" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="52" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="60" class="image" src="assets/img/Noimage.png" /></div></td>
           </tr>
           <tr>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="03" class="image" src="assets/img/Noimage.png"/></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="11" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="19" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="27" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="35" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="43" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="51" class="image" src="assets/img/Noimage.png" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="59" class="image" src="assets/img/Noimage.png" /></div></td>
           </tr>
           <tr>
                <td class="white"><div onClick="reply_click(this.id)"><img id="02" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="10" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="18" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="26" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="34" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="42" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="50" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="58" class="image" src="assets/img/pionBlanc.png" alt="pion" /></div></td>
           </tr>
           <tr>
                <td class="blue" id="b01"><div onClick="reply_click(this.id)"><img id="01" class="image" src="assets/img/TourBlanc.png" alt="tour" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="09" class="image" src="assets/img/CavalierBlanc.png" alt="cavalier" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="17" class="image" src="assets/img/FouBlanc.png" alt="fou" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="25" class="image" src="assets/img/DameBlanc.png" alt="dame" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="33" class="image" src="assets/img/RoiBlanc.png" alt="roi" /></div></td>
                <td class="white"><div onClick="reply_click(this.id)"><img id="41" class="image" src="assets/img/FouBlanc.png" alt="fou" /></div></td>
                <td class="blue"><div onClick="reply_click(this.id)"><img id="49" class="image" src="assets/img/CavalierBlanc.png" alt="cavalier" /></div></td>
                <td class="white" id="w57"><div onClick="reply_click(this.id)"><img id="57" class="image" src="assets/img/TourBlanc.png" alt="tour" /></div></td>
            </tr>
        </table>
        </body>
    )
}

export default ChessBoard;