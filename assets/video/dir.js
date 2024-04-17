export default function Video() {
  return (
    <video autoPlay loop muted className="w-full h-[30rem]">
      <source src="/home_video.mp4" type="video/mp4" />
    </video>
  );
}
