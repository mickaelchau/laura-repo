import Scan from '../components/Scan';
import ImageShow from '../components/ImageShow';
import Description from '../components/Description';

const Index = () => {
    return (
        <>
            <Scan 
                name = "“Feuille”"
                author = "Laura Parouty"
                imgSrc = "/img/Scan.jpg"
                imgAlt = "Scan de la feuille"/>
            <ImageShow/>
            <Description
                txt1 = "“Feuille” est une série de dessins traitant de la modulation d'une feuille végétale. 
                        Cette série est composée d un dessin aux crayons de couleur et de différents filtres colorés de calque superposé sur ce dernier."
                txt2 = "Ainsi par ce jeu de couleur le spectateur est amené dans un univers coloré imaginaire d'une feuille."/>
            </>
    );
}

export default Index;

