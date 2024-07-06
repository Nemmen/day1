import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ShowMore = () => {
  const [show, setShow] = useState(0);
  console.log(show)

  const para1 =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit maiores mollitia eum adipisci at non illo hic voluptate odit sint? Repellat delectus totam earum voluptatibus, culpa fugiat consequuntur similique, blanditiis, omnis doloremque ut placeat odio in ratione ea.';



  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:18 , textAlign:'justify' , marginVertical:10 , color:'black'}}>{para1}</Text>
	  {show == 1 ? ( <Text style={{fontSize:18 , textAlign:'justify' , marginVertical:10 , color:'black'}}>{show==2?para1+para1:para1}</Text>):('')}
	 
      {show == 1 ? (
		<View>
		
        <Button
          title="show  less"
          onPress={() => {
            setShow(-1);
          }}
        />
		</View>
      ) : (
        <Button
          title="show more"
          onPress={() => {
            show == -1 ? setShow(1):setShow(prev=>prev+1)
          }}
        />
      )}
    </View>
  );
};

export default ShowMore;
