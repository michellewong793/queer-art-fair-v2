import style from './pages.module.css';
import Spacer from './Spacer';

const PastVendor = (props) => {
    let pastVendorStyles = {
        container: {
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center',
            marginTop: '20px',
            paddingLeft: '5%',
            paddingRight: '5%',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
        }, 

        image: {
            height: "40px",
            width: "40px"
        }
    };
    return (
        <div style = {pastVendorStyles.container}> 
            <img style = {pastVendorStyles.image} src = "/orange.svg"/>
            <Spacer width = {1}/>
            <a className = {style.pastVendorsText} href = {props.url1}>
                {props.text1}
            </a>
            <Spacer width = {0.25}/>
            <p className = {style.pastVendorsText}> - </p>
            <Spacer width = {0.25}/>
            <a className = {style.pastVendorsText} href = {props.url2}>
                {props.text2}
            </a>
            <Spacer width = {1}/>
            <img style = {pastVendorStyles.image} src = "/orange.svg"/>
        </div>
    )
};

export default PastVendor;
