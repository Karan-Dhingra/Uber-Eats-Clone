import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function BottomTabs() {
    return (
        <View style={{ 
            flexDirection: 'row', 
            margin: 10, 
            marginHorizontal: 30, 
            justifyContent: 'space-between' 
        }}>
            <Icon text={"Home"} icon={"home"} />
            <Icon text={"Browse"} icon={"search"} />
            <Icon text={"Grocery"} icon={"shopping-bag"} />
            <Icon text={"Orders"} icon={"receipt"} />
            <Icon text={"Account"} icon={"user"} />
        </View>
    )
}

const Icon = (props) => (

    <TouchableOpacity>
        <View>
            <FontAwesome5 name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: 'center',
                }}  
                />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)