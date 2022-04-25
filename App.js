import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text ,ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.shape0}>
       <View style={styles.menu}><Ionicons name="menu" size={30} color="white" /></View>
       <View style={styles.left}><AntDesign name="down" size={24} color="white" /></View>
       <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>Virtual Classes</Text>
       </View> 
      
      <ScrollView>
       <View style={styles.shape1}>
       <View style={styles.school}><FontAwesome5 name="school" size={40} color="white" /></View>
       <Text style={{color: 'white', fontWeight: '700', fontSize: 24}}>Student Courses</Text>
       </View> 

       <View style={styles.shape2}>
       <View style={styles.left}><AntDesign name="down" size={24} color="white" /></View>
       <Text style={{color: 'white', fontWeight: '700', fontSize: 17,}}>Software Engineering & Multimedia</Text>
       </View>

       <View style={styles.rec1}>
       <Image
      source={require("./assets/software.jpg")}
      style={{height: 250, width: 344,borderTopLeftRadius:10, borderTopRightRadius: 10  }} 
      />
       </View>

       <View style={styles.rec2}>
         <Text style={{color: 'white', fontSize: 16, fontWeight: '600', textAlign: 'justify'}}>Software Engineering is a detailed study of engineering to the design, development and maintenance of software.  Multimedia is a representation of information in an interactive manner with the use of a combination of text, audio, video and photos.</Text>
       </View>

       <View style={styles.shape3}>
       <View style={styles.left}><AntDesign name="down" size={24} color="white" /></View>
       <Text style={{color: 'white', fontWeight: '700', fontSize: 17,}}>Information Technology</Text>
       </View>

       <View style={styles.rec3}>
       <Image
      source={require("./assets/it.jpg")}
      style={{height: 250, width: 344,borderTopLeftRadius:10, borderTopRightRadius: 10  }} 
      />
       </View>

       <View style={styles.rec4}>
         <Text style={{color: 'white', fontSize: 16, fontWeight: '600', textAlign: 'justify'}}>Information Technology is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Communication is also faster with IT.</Text>
       </View>


       <View style={styles.shape4}>
       <View style={styles.left}><AntDesign name="down" size={24} color="white" /></View>
       <Text style={{color: 'white', fontWeight: '700', fontSize: 17,}}>Architecture and Build Environment</Text>
       </View>

       <View style={styles.rec5}>
       <Image
      source={require("./assets/architecture.jpg")}
      style={{height: 250, width: 344,borderTopLeftRadius:10, borderTopRightRadius: 10  }} 
      />
       </View>

       <View style={styles.rec6}>
         <Text style={{color: 'white', fontSize: 16, fontWeight: '600', textAlign: 'justify'}}>Architecture is both the process and the product of planning, designing, and constructing buildings or other structures. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art.</Text>
       </View>

       <View style={styles.logout}>
         <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}> Do you wish to Logout?</Text>
         <View style={styles.left}><AntDesign name="down" size={24} color="white" /></View>
         
       </View>

       </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30 
  },

  shape0: {
    height: 60,
    width: 358,
    backgroundColor: 'dodgerblue',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
      },
  
  shape1: {
    width: 340,
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'space-evenly',
    marginBottom: 30
  },

  menu: {
    position: 'absolute',
    top: 15,
    paddingLeft: 15

  },

  left: {
    position: 'absolute',
    top: 20,
    right: 20,
  },

  shape2: {
    height: 60,
    width: 344,
    backgroundColor: 'dodgerblue',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

      },

  shape3: {
    height: 60,
    width: 344,
    backgroundColor: 'dodgerblue',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },

  shape4: {
    height: 60,
    width: 344,
    backgroundColor: 'dodgerblue',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
      },

  rec1: {
    backgroundColor: 'white',
    height: 250,
    width: 344,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  rec2: {
    backgroundColor: 'deepskyblue',
    height: 120,
    width: 344,
    marginBottom: 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
      },
    
  rec3: {
    backgroundColor: 'white',
    height: 250,
    width: 344,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  rec4: {
    backgroundColor: 'deepskyblue',
    height: 120,
    width: 344,
    marginBottom: 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
      },
  
  rec5: {
    backgroundColor: 'white',
    height: 250,
    width: 344,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  rec6: {
    backgroundColor: 'deepskyblue',
    height: 120,
    width: 344,
    marginBottom: 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
      },

  logout: {
    height: 60,
    width: 344,
    backgroundColor: 'dodgerblue',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
      },
  
  
});
