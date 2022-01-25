import React, {Component} from "react";
import { View, Text, FlatList, Button } from "react-native";


class TodoList extends Component{

    static defaultProps = {
        list: [],
        onRemove: () =>{}
    }
    
    handleRow = ({ item, index }) => {
        return (
            <View >
                <Text >
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button
                    style={{width: 10}}
                    title="X"
                    color="#731919"
                    onPress={()=> this.props.onRemove(item)}
                />
            </View>
       )    
    }

    formatListNumber(number) {
        const digits = 2;
        return ('0'.repeat(digits) + (number +1)).slice(-digits)
    }
    
    render() {
        const { props } = this;
        const keyExtractor = item => item.id;
        return (
            <View>
                <FlatList
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />
            </View>
        );
    }
}

export default TodoList;