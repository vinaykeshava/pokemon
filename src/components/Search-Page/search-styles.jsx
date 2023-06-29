import { makeStyles } from "tss-react/mui";

export default makeStyles()({
  container:{
    marginTop: 20,
    border: '2px solid black',
    background: '#fff',
    height: 'fit-Content',
    width: 'fit-Content',
    padding: 5,
  },
  button:{
    margin: 5,
  },
  root: {
    // marginTop: '5px',
    height: 'calc(100vh - 64px)',
    width: '100vw',
    paddingTop: 10,
    position: 'relative',
    '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
        backgroundImage: "url(https://cdn1.vox-cdn.com/uploads/chorus_asset/file/666726/pkmn1.0.jpg)",
        backgroundRepeat: 'repeat',
        opacity: 0.5,
        zIndex: '-1',
    },
},
})
