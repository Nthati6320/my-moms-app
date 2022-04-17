import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.rec1}>
        <View style={styles.left}><AntDesign name="left" size={26} color="white" /></View>
      <View style={styles.rec0}><AntDesign name="search1" size={20} color="white" /></View>
      <View style={styles.option}><Ionicons name="options-outline" size={26} color="white" /></View>
      </View>

      <View style={styles.rec2}><View style={styles.down}><AntDesign name="down" size={20} color="grey" /></View><Image
      source={require("./assets/fake.jpg")}
      style={{height: 70, width: 70, top: 29, marginBottom: 35}} 
      /><View styles={styles.listen}><Text style={{fontWeight: '700'}}>Real Love is still there, you just need to find the right person to remind you that.</Text></View>
      <View style={styles.molupe}><Text style ={{fontWeight: '700'}}>Molupe Sello</Text></View>
      <View style={styles.yesterday}><Text style={{color: 'grey'}}>Yesterday  <Fontisto name="world" size={12} color="lightgrey" /></Text></View>
      </View>
        
      <View style={styles.rec3}><Image
      source={require("./assets/love.jpeg")}
      style={{height: 260, width: 350,}} 
      /></View>
      <View style={styles.rec4}>
        <Text style = {{color: 'grey'}}>50 Likes       100 comments</Text>
      </View>

      <View style={styles.rec5}>
      <View style={styles.like}><AntDesign name="like1" size={24} color="lightgrey" /><Text style = {{color: 'grey'}}>Like</Text></View>
      <View style={styles.comment}><FontAwesome name="comment" size={24} color="lightgrey" /><Text style = {{color: 'grey'}}>Comment</Text></View>
      <View style={styles.share}><MaterialCommunityIcons name="share" size={24} color="lightgrey" /><Text style = {{color: 'grey'}}>Share</Text></View>  
      </View>

      <View style={styles.rec6}>
        <Image
      source={require("./assets/nthati.jpg")}
      style={{height: 70, width: 70, top: 18}} 
      />
      <View style= {styles.nthati}><Text style= {{color: 'black', fontWeight: '700'}}>Nthati Sello</Text></View>
      <View style={styles.day}><Text style = {{color: 'grey'}}>5 April  <Fontisto name="world" size={12} color="lightgrey" /></Text></View>
      <View style={styles.down}><AntDesign name="down" size={20} color="grey" /></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rec1:{
    backgroundColor:'royalblue',
    height:80,
    width: 360,
    alignItems: 'flex-start',
    marginBottom: 8,
    justifyContent: 'center',  
  }, 

  rec0:{
    height:30,
    width: 250,
    backgroundColor: 'dodgerblue',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    right: -50,
    top: -7,
    padding: 4,
  },

  rec2:{
    backgroundColor: 'white',
    height: 140,
    width: 344,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10
  },
  
  rec3:{
    backgroundColor: 'white',
    height: 260,
    width: 350,  
    alignItems: 'center'
  },

  rec4:{
    backgroundColor: 'white',
    height: 40,
    width: 344,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  rec5:{
    backgroundColor: 'whitesmoke',
    height: 40,
    width: 344,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 8,  
  },

  like:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 45,  
  },

  comment:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 30,
  },

  share:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start', 
    marginRight: 35 
  },

  rec6:{
    backgroundColor: 'white',
    height: 95,
    width: 344,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  down:{
    position: 'absolute',
    right: 5,
    top: 8
  },
  nthati:{
    top:-50,
    right: -80, 
  },
  molupe:{
    top:-100,
    right: -80,
  },
  yesterday:{
    top:-100,
    right: -80,
  },
  day:{
    top:-50,
    right: -80, 
  },
  option:{
    position: 'absolute',
    right: 7,
    top:35
  },
  left:{

top: 20
  }
  
});
