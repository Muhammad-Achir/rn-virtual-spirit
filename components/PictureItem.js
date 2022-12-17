import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function PictureItem(props) {
    const item = props.item

    function handleLike() {
        props.handleTotalLike(item.id, "LIKE")
    }

    function handleDislike() {
        props.handleTotalLike(item.id, "DISLIKE")
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: item.image }}
            />
            <View style={styles.containerInfo}>
                <View style={styles.containerTextLike}>
                    <Text style={styles.textLike}>{item.totalLike} Like</Text>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.buttonLike}
                        onPress={handleLike}
                    >
                        <Text style={styles.textWhite}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonDislike}
                        onPress={handleDislike}
                    >
                        <Text style={styles.textWhite}>Dislike</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    containerInfo: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5
    },
    containerTextLike: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#d1d1d1",
        justifyContent: "center",
        padding: 8,
    },
    textLike: {
        color: "grey",
        fontSize: 16
    },
    textWhite: {
        color: "white",
        fontSize: 16
    },
    containerButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonLike: {
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "center",
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#2774cc",
        width: 80
    },
    buttonDislike: {
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "center",
        marginRight: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#e02828",
        width: 80
    },
})

export default PictureItem;
