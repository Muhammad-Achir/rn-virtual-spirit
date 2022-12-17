import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PictureHeader from '../components/PictureHeader';
import PictureItem from '../components/PictureItem';

function Pictures() {
    const [data, setData] = useState([
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW58fHx8fHwxNjcxMjcxNDY5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
            totalLike: 0,
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1609083590460-7b8cc0ca65f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3R8fHx8fHwxNjcxMjcxNTk1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
            totalLike: 0,
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1669634941363-a7276fe0fb6d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTI3MTM4Ng&ixlib=rb-4.0.3&q=80&w=1600',
            totalLike: 0,
        },
    ]);

    function handleLikeDislikeAll(type) {
        setData(prevState =>
            prevState.map(item => {
                if (type === "LIKE_ALL") {
                    return { ...item, totalLike: item.totalLike + 1 }
                } else {
                    return { ...item, totalLike: item.totalLike - 1 }
                }
            })
        )
    }

    function resetLike() {
        setData(prevState =>
            prevState.map(item => {
                return { ...item, totalLike: 0 }
            })
        )
    }

    function handleTotalLike(id, type) {
        setData(prevState =>
            prevState.map(item => {
                if (item.id === id) {
                    let newTotalLike = item.totalLike
                    if (type === "LIKE") {
                        newTotalLike += 1
                    }
                    else {
                        newTotalLike -= 1
                    }

                    return { ...item, totalLike: newTotalLike }
                }

                return item
            })
        )
    }

    return (
        <View>
            <PictureHeader
                handleLikeDislikeAll={handleLikeDislikeAll}
                resetLike={resetLike}
            />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <PictureItem item={item} handleTotalLike={handleTotalLike} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Pictures;
