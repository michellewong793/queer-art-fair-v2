import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Spacer from "../components/Spacer";

export default function Index() {
  return (
    <div>
      <Layout />
      <div style={Styles.content}>
        <h1> Featured Vendor: 
        Anna Lam </h1>
        <a href="https://www.etsy.com/shop/ShopPlanningWithAnna">Anna's Planning Etsy Shop</a> 
        <a href="https://www.etsy.com/shop/ShopArtsyAnna">Anna's Plushie Bouquet and Graduation Leis Etsy Shop</a> 

        <h3>Biography</h3>
        <p><a href="https://www.instagram.com/planningwithanna">@planningwithanna</a> - Anna's love for stickers and stationery started at 8 years old when she was gifted a sticker book to collect and trade stickers with her friends. In middle school, she received a free school planner which she decorated with lots of colorful gel pens, "scratch and sniff" stickers and doodles! 

Fast forward to college, Anna was in search of a cute planner to keep up with all her assignments. She stumbled upon the planner community on instagram. Everyone decorated their planners with stickers and washi tapes just like she did before but as adults! This brought back a lot of nostalgic memories. 

Planning is a creative outlet that helped Anna de-stress and make productivity fun. Now, she designs and sell stickers and stationery to spread the joy she feels when decorating her planner.</p>
        <hr/>

        <Spacer height={2} />
        <a href="/march-11-vendors"> Back to Vendor List </a>

      <p>apply to be a vendor: <a href="mailto:m@ourquest.xyz"> michellurito@gmail.com </a></p>
      
      
      </div>
    </div>
  );
}
