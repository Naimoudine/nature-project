import NavBar from "./NavBar";
import video from "../assets/video.mp4";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="w-full ">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={video}
          type="video/mp4"
        ></video>
      </div>
    </header>
  );
}
