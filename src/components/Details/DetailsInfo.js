import Heading from "../common/Heading";
import BackBtn from "./BackBtn";
import Genres from "./Genres";
import styled from "styled-components";

const InfoSection = styled.section`
    .DetailsInfo-title {
      margin-bottom: 1.25rem;
      h1, h2{
        letter-spacing: 1px;
        margin-bottom: 5px;
      }

    }
    .DetailsInfo-year {
      font-weight: 500;
      margin-bottom: 7px;
    }
    .DetailsInfo-overview {
      color: #324d67;
      max-width: 35em;
      font-size: 1.2rem;
      line-height: 1.8;
    }
`;



function DetailsInfo({details}){
    const { title, release_date, original_title : originalTitle, genres, overview } = details;
    const year = parseInt(release_date);
    return (
        <InfoSection>
            <div className="DetailsInfo-title">
                <Heading size={40} fontcolor={"#112a42"}>{title}</Heading>
                {title !== originalTitle && <Heading level={2} size={30} fontcolor={"#112a42"}>{originalTitle}</Heading>}
                <p className="DetailsInfo-year">{!isNaN(year) && year}</p> 
            </div>
            <Genres genres={genres}/>
            <p className="DetailsInfo-overview">{overview}</p>
            <BackBtn/>
        </InfoSection>
    );

}

export default DetailsInfo;