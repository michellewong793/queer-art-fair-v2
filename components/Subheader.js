import Styles from './Subheader.module.css'
import MarketplaceAccess from './MarketplaceAccess'

const Subheader = (props) => {
    return (
        <div>
            <h1 className={Styles.qafTextStyle}>QUEER ART FAIRE</h1>
            <p className={Styles.smallTextStyle}>FRESH ART FAIRS IN THE BAY AREA</p>
            <MarketplaceAccess />
        </div>
    )
}

export default Subheader;