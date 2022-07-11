import { useEffect, useState } from "react";
import youtubeIcon from "../../images/youtube-icon.png";
import styled from "styled-components";

const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";
const getVideo = (videos) => {
  let link = "";
  let type = "";
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].site.toLowerCase() === "youtube") {
      link = `${YOUTUBE_BASE_URL}?v=${videos[i].key}`;
      type = videos[i].type;
      if (videos[i].type.toLowerCase() === "trailer") {
        return {
          link,
          type,
        };
      }
    }
  }
  return {
    link,
    type,
  };
};

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;

const VideoLink = ({ videos }) => {
  const [video, setVideo] = useState({
    link: "",
    type: "",
  });
  useEffect(() => {
    if (videos) {
      const video = getVideo(videos);
      setVideo(video);
    }
  }, [videos]);
  return video.link !== "" ? (
    <Link href={video.link} target="_blank" rel="noreferrer">
      <Image src={youtubeIcon} />
      Let's Go to See {video.type}
    </Link>
  ) : null;
};

export default VideoLink;
