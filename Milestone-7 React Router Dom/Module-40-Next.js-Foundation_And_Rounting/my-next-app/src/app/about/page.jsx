import Image from "next/image";
import dev from '../../assets/images/dev.png'

export const metadata = {
  title: 'About',
  description: 'About Images',
};

const AboutPage = () => {
  return (
    <div>
      <h2 className="text-3xl text-red-400">This is About Page</h2>
      <Image
        src="https://plus.unsplash.com/premium_photo-1664304310991-b43610000fc2"
        height="300"
        width="500"
        alt="Lion pic"
      ></Image>

      <Image
        height="300"
        width="300"
        src="/profile-pic (10).png"
        alt="Shadhin pic"
      ></Image>

      <Image src={dev} height="300" width="400" alt="dev pic"></Image>
    </div>
  );
};

export default AboutPage;