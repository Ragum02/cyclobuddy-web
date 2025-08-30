import HeroContainer from './components/home/HeroContainer';
import Card from './components/home/Card';

export default function Home() {
  return (
    <>
      <HeroContainer />
      <div className="flex flex-1 flex-col lg:flex-row justify-evenly items-center gap-8 py-10 ">
        <Card
          logo="/svg/homecard/add-ride.svg"
          title="Crée une sortie"
          description="Organise facilement ta prochaine sortie vélo : choisis le parcours, fixe la date et retrouve tes partenaires de route."
          href="/create-ride"
        />
        <Card
          logo="/svg/homecard/group-ride.svg"
          title="Rejoindre une sortie"
          description="Découvre les sorties déjà planifiées autour de toi et rejoins d'autres passionnés de vélo. "
          href="/rides"
        />
        <Card
          logo="/svg/homecard/my-rides.svg"
          title="Voir mes sorties"
          description="Retrouve en un seul endroit toutes les sorties auxquelles tu t'es inscrit ou que tu souhaites rejoindre."
          href="/my-rides"
        />
      </div>
    </>
  );
}
