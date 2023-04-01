import { useRef, useLayoutEffect } from "react";
import './MainPaddingTop.css'
import stl from './Main.module.css';

function Main() {

  const mainPaddingTop = useRef();

  useLayoutEffect(() => {
    const header = document.getElementById('mainTop');
    let fixedTop = mainPaddingTop.current.offsetTop;

    const mainPaddingTopEvent = () => {
      if (window.pageYOffset > fixedTop) {
        header.classList.add('paddingTop');
      } else {
        header.classList.remove('paddingTop');
      }
    };
    window.addEventListener('scroll', mainPaddingTopEvent);
  }, []);

  return (
    <div className={stl.main} id='mainTop' ref={mainPaddingTop}>
        <div className={stl.mainBox}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quas maxime dolores blanditiis ullam harum suscipit? Asperiores fugit, iusto consequuntur tempore quia dicta iure delectus corporis excepturi iste repellat eum!
          Tempore recusandae, asperiores suscipit tenetur sunt dolorem eligendi reiciendis error incidunt modi, ducimus natus. Minima nobis aperiam eum omnis praesentium vitae voluptatibus, vel adipisci itaque neque. Magni aliquid reiciendis suscipit.
          Itaque quod, nesciunt earum labore in consequuntur quo, obcaecati at recusandae ipsa ex. Sequi quae modi, debitis a nulla explicabo error voluptas reiciendis animi eligendi repudiandae rerum, qui laboriosam saepe?
          Quod facere quam quibusdam sunt dolor illum quidem officiis fugit placeat minima fugiat at reiciendis fuga, asperiores, et doloribus deserunt odio commodi cupiditate? Alias aut, quisquam tenetur aliquam ad fuga?
          Nam alias esse voluptatibus dignissimos nobis officiis perspiciatis iure qui impedit corrupti molestias ipsam autem nemo nisi, voluptatum numquam, accusamus ipsum quidem ullam mollitia! Eum totam incidunt nulla non aliquid!
          Totam sit enim alias iste quibusdam non. Eum aperiam consectetur sed commodi impedit veritatis temporibus enim inventore, adipisci, provident aut! Blanditiis officiis quisquam laborum maiores eveniet mollitia distinctio inventore obcaecati.
          Nemo, fuga voluptatibus! Quis eaque molestias vel, est odio a delectus et iusto beatae nobis alias quaerat velit consectetur error aliquid nemo at officiis consequuntur obcaecati tempore accusamus possimus omnis.
          Aliquid deleniti praesentium consectetur ad non nisi mollitia dignissimos veniam? Dolores nulla quidem autem laborum, iusto inventore quos placeat saepe! Unde sunt assumenda vel consequatur odit cumque nisi saepe recusandae?
          Reprehenderit voluptatibus sunt nihil necessitatibus libero tempora voluptatem accusantium ullam illum minima eius id culpa doloribus, vero sequi, tenetur reiciendis autem sapiente. Ad minima beatae consequuntur mollitia suscipit quibusdam esse.
          Quibusdam, deserunt minus. Eius optio fuga modi cupiditate nesciunt, porro reprehenderit vero. Eius nam eveniet et, earum, similique atque amet delectus, sed aut quia explicabo ab ullam fugit quaerat velit.
          Non atque alias, deserunt, voluptatibus incidunt consequatur delectus eum natus fuga, repudiandae dolores doloribus rem illum. Dolorem minus ab fuga at sequi adipisci, necessitatibus omnis cupiditate, sed dolore maxime quidem!
          Eaque magnam repellendus voluptatem dignissimos accusamus nemo eveniet fugiat recusandae. Sapiente inventore officiis autem molestias, iste laborum maiores optio temporibus earum, repellat, assumenda eos ipsam. Placeat, quas. Corrupti, ad consequatur?
          Excepturi voluptatibus porro veritatis laboriosam sequi quae veniam dolorem in consequatur, itaque voluptate eos nobis distinctio optio laudantium ipsa corporis saepe est eligendi officia molestiae mollitia repellat quo! Labore, velit.
          Placeat at accusamus excepturi vel animi ipsum eius consequuntur officia veniam explicabo asperiores nisi cupiditate voluptatem fugiat, esse impedit eaque accusantium, error ad! Commodi eligendi dolorum harum, expedita quidem eveniet.
          Id aperiam exercitationem officiis culpa possimus. Expedita corrupti consequuntur quos, error voluptatum veniam et reprehenderit similique. Molestias dicta, animi perspiciatis labore dignissimos minima consequuntur alias id omnis vero, dolorem sunt?
          Soluta pariatur quis quos ratione iusto tempora eius cum nemo cupiditate! Dignissimos, asperiores eligendi doloremque non omnis quisquam voluptate quae debitis dicta nam aspernatur iste reiciendis, modi temporibus, facilis harum.
          Suscipit dolores quasi nihil iste quisquam sint vitae, eligendi beatae porro deserunt laudantium eum, vel architecto recusandae! Odio nihil soluta, quasi impedit molestias quisquam excepturi quam, ad eius dolorem doloribus.
          Itaque, repellendus laboriosam provident ab inventore doloremque officiis quidem mollitia reprehenderit cumque vero culpa deserunt sunt eligendi. Necessitatibus quod possimus commodi amet, quia, suscipit dolorum dolores, expedita non culpa perferendis!
          Vitae porro voluptates soluta et quisquam sit harum culpa eius dolores non est voluptatem repudiandae deleniti, molestias officiis illo. Iste temporibus corrupti tempore soluta ratione, porro nihil eius nemo at.
          Rem atque deleniti porro at dolorem, blanditiis ipsum, deserunt commodi eveniet maiores dolorum? Voluptate ea natus sed assumenda autem deleniti molestiae eveniet doloribus, deserunt provident a quibusdam optio illo porro!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, dolore assumenda dicta magnam dolor non id qui animi quos corrupti fuga est, culpa deleniti. Quo dolorem nemo culpa repudiandae perspiciatis!
          Nisi distinctio porro quia, sed consequuntur fuga. Dignissimos, quos at atque vel ut fugiat nam, veritatis recusandae similique reiciendis saepe error aliquam exercitationem impedit laborum, corrupti dolorem aperiam rerum ad.
          Fugiat repellat delectus molestias voluptates obcaecati, error itaque temporibus eaque ex, qui dicta beatae aspernatur. Ab, deserunt accusantium quidem unde aperiam maiores corrupti quam omnis quisquam nemo, excepturi, optio aspernatur!
          Alias voluptatibus veritatis maiores numquam! Aliquid autem commodi itaque distinctio repellendus, ipsum numquam esse molestiae ab natus repellat accusamus consequatur dolorum, dolorem ipsam. Minima eum odio necessitatibus tempore beatae aliquid.
          Architecto nobis dolor nihil soluta rerum sed ex tenetur dolorum. Ut voluptas voluptatum id consequuntur maiores qui debitis, quam ab deleniti asperiores aliquid enim blanditiis quos distinctio quae animi sapiente.
          Saepe pariatur cum assumenda incidunt, accusamus nulla officiis porro sed ex cupiditate dolore nesciunt ipsum eligendi quod rerum in suscipit molestiae! Iste obcaecati sit saepe voluptatibus repudiandae laboriosam temporibus dolorum.
          Iure nobis, optio quisquam vitae odio voluptas ipsum saepe dolorem sequi impedit quaerat nulla, excepturi deserunt velit officiis quis quia. Iusto illo doloremque quibusdam architecto perferendis voluptates tempore sit voluptatum.
          Quae nostrum quibusdam esse quaerat aspernatur quas possimus adipisci itaque magni, molestiae error neque et ullam saepe, blanditiis iusto dicta dolorum doloribus fuga soluta quia, ex repellendus. Iste, labore beatae?
          Nihil, nemo ratione, ipsa omnis odio dolor, tenetur sunt praesentium maiores earum ducimus quam saepe minima repudiandae architecto nisi asperiores animi labore itaque assumenda quaerat cupiditate in. Corporis, soluta rem?
          Odit vitae voluptates, ex vel laborum vero in soluta. Consequuntur cumque provident dolorem laudantium odio voluptatibus non maxime sit placeat tenetur mollitia saepe excepturi eveniet cupiditate at, modi quod eligendi!
          Minima dolorem laudantium, cupiditate placeat laborum beatae dolor magni eligendi eos suscipit, doloribus tempore alias expedita distinctio autem voluptatum blanditiis sunt qui? Quis adipisci sed molestiae nesciunt, quia impedit aspernatur!
          Laborum minus sunt perferendis culpa totam tempora velit porro fugiat unde est, laudantium eum sapiente hic ex nihil corrupti amet voluptate blanditiis dolor deleniti repellendus, cum praesentium natus! Laudantium, officia.
          Repudiandae sunt enim minus quia perferendis dolore, harum earum suscipit temporibus hic quidem beatae facere corporis, consequuntur et consequatur? Et nihil quo incidunt numquam at doloribus eligendi. Magni, dolor veritatis?
          Suscipit repellendus officia, sint magnam hic nostrum rem delectus soluta libero ab quasi voluptates id aut reiciendis distinctio et recusandae nesciunt qui nam. Doloribus velit, eligendi unde itaque eveniet corporis?
          Odio mollitia quae autem, expedita eaque minima iure numquam repellendus repellat. Tenetur iusto eveniet accusamus laudantium quibusdam neque beatae, iure similique facilis magnam quam architecto consequuntur, doloremque non error distinctio.
          Ipsum dignissimos sit, sed fuga modi vitae eligendi deleniti officiis quidem non expedita vero veniam. Dolorem commodi vel, facilis impedit quis dolores consequuntur placeat dignissimos repellendus ab eos aut! Ipsam?
          Asperiores dolores voluptatibus quisquam velit facere ratione dolore, eum adipisci est quaerat, voluptatem, in iusto laborum? Quisquam illum accusamus quasi reiciendis repudiandae quod laborum culpa eaque, facilis architecto error vero.
          Quasi ea, fugit deserunt veniam voluptas sed facilis corrupti enim libero repellat, nemo rem aliquid. Earum ducimus, quia magnam perspiciatis voluptas dicta totam odio, temporibus, excepturi illo quo vitae suscipit!
          At cum, distinctio corporis repellat exercitationem laboriosam ipsum, assumenda nisi quidem debitis quod. Suscipit nemo magnam necessitatibus dolore vitae vero optio commodi fugit, corrupti inventore pariatur est asperiores iure repellat!
          Tempore, eligendi. Quae, vel suscipit maxime ipsa fuga blanditiis possimus voluptas ipsum sequi. Alias obcaecati officia magnam corporis amet saepe nesciunt voluptatum at maiores? Quaerat pariatur earum dicta sit quibusdam.
        </div>
    </div>
  );
}

export default Main;