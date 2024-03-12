import './css/Home.css'

function Home() {

  return (
    <main>
      <div className="card first-card">
        <img className="card-picture-first" src="http://placekitten.com/200/200?image=1" alt="cat holds a pillow"/>
        <div className="card-text-first">
          <h2 className="card-title-first">The Feline Phenomenon</h2>
          <p>Cat Craze: The feline phenomenon has taken the world by storm, with cats reigning supreme as beloved companions in households worldwide.</p>
          <p>Internet Sensation: Cats have become an internet sensation, capturing hearts through viral videos and memes, showcasing their quirky behaviors and endearing personalities.</p>
          <p>Cultural Icons: From ancient Egyptian deities to modern pop culture, cats have left an indelible mark, becoming symbols of mystery, independence, and charm.</p>
          <p>Therapeutic Companions: Beyond their playful antics, cats have proven to be therapeutic companions, offering solace and comfort to individuals facing stress or loneliness.</p>
          <p>Diverse Breeds: The feline world boasts a diverse array of breeds, each with its unique characteristics, from the regal Maine Coon to the sleek Siamese.</p>
        </div>
      </div>
        <div className="card second-card">
          <img className="card-picture-second" src="http://placekitten.com/200/200?image=3" alt="cat in snow"/>
          <div className="card-text-second">
            <h2 className="card-title-second">The Science Behind Cat Videos</h2>
            <p>Natural Hunters: Cats are natural hunters, showcasing their prowess in stalking and catching prey, even in domestic settings where their prey is often a feathered toy.</p>
            <p>Mysterious Behaviors: The enigmatic behaviors of cats, such as kneading, purring, and the infamous "cat loaf" pose, contribute to their mystique, keeping owners endlessly intrigued.</p>
            <p>Independent Spirits: Cats are renowned for their independent spirits, adding an air of sophistication and aloofness that has endeared them to those who appreciate a more self-sufficient companion.</p>
            <p>Symbol of Good Luck: In various cultures, cats are considered symbols of good luck, with the Japanese Maneki-neko (beckoning cat) believed to bring prosperity and fortune.</p>
            <p>Cat Cafés and Events: The global rise of cat cafés and cat-centered events reflects the feline phenomenon, providing spaces for enthusiasts to revel in the company of cats and share their love for these captivating creatures.</p>
          </div>
        </div>
    </main>
  )
}

export default Home;
