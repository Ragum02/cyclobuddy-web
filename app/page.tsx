import HeroContainer from './components/home/HeroContainer';
import Card from './components/home/Card';

export default function Home() {
  return (
    <>
      <HeroContainer />
      <div className="flex flex-1 flex-col md:flex-row justify-evenly items-center gap-8 py-10 ">
        <Card
          logo="https://placehold.co/50x50.png"
          title="Card Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptatibus incidunt qui illo ?"
          buttonText="Button Text"
        />
        <Card
          logo="https://placehold.co/50x50.png"
          title="Card Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptatibus incidunt qui illo ?"
          buttonText="Button Text"
        />
        <Card
          logo="https://placehold.co/50x50.png"
          title="Card Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptatibus incidunt qui illo ?"
          buttonText="Button Text"
        />
      </div>
    </>
  );
}
