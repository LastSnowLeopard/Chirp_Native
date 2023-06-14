import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import SoundPlayer from 'react-native-sound-player';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../assets/Colors';
import IMAGES from '../../constants/Images';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

function MyAudioPlayer(props) {

    const dispatch = useDispatch();
    const audioPlayState = useSelector(state => state.user.audioPlayState);
    const [duration, setduration] = useState(0);
    const [sec, setsec] = useState(0);


    useEffect(() => {
        if (audioPlayState === 'stopped') {
            setduration(0);
            setsec(0);
        }
    }, [audioPlayState]);

    useEffect(() => {
        stopAudio();
        if (audioPlayState === 'play') {
            // stopAudio();
            setTimeout(() => {
                playAudio()
            }, 100);
        }
    }, [props.url && props.url])

    const getAudioInfo = () => {
        clearIntervals();
        SoundPlayer.getInfo().then(info => {
            let currentTimes = parseFloat(info.currentTime);
            let durations = parseFloat(info.duration);
            setsec(currentTimes);
            setduration(durations);
            setInterval(async () => {
                let infos = await SoundPlayer.getInfo();
                let currentTimes = parseFloat(infos.currentTime);
                let durations = parseFloat(infos.duration);
                setsec(currentTimes);
                setduration(durations);
                if (infos.currentTime >= infos.duration) {
                    stopAudio();
                }
            }, 100);

            if (info.currentTime >= info.duration) {
                stopAudio();
            }
        });
    };



    const playAudio = () => {

        if (audioPlayState === 'paused') {
            SoundPlayer.resume();
            dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'play' })
            getAudioInfo();
        } else if (audioPlayState === 'stopped') {
            dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'loading' })
            setTimeout(playAudioPlayer, 100);
        }
    };

    const playAudioPlayer = async () => {
        try {

            SoundPlayer.addEventListener('FinishedLoading', ({ success, url }) => {
                SoundPlayer.play();
                dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'play' })
                getAudioInfo();
            });
            SoundPlayer.addEventListener('FinishedPlaying', ({ success, url }) => {
                if (audioPlayState === 'play') {
                    pausedAudio();
                }
            });
            SoundPlayer.loadUrl(props.url && props.url);
        } catch (e) {
            dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'stopped' })
            console.log('cannot play the sound file', e);
        }
    };


    const pausedAudio = () => {
        dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'paused' })
        clearIntervals();
        SoundPlayer.pause();
    };

    const stopAudio = () => {
        dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'stopped' });
        clearIntervals();
        setsec(0);
        SoundPlayer.stop();
    };

    const clearIntervals = () => {
        let interval_id = setInterval(() => {
        }, 1000);
        for (let i = 1; i <= interval_id; i++) {
            clearInterval(i);
        }
    };

    var toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor(sec_num / 60) % 60;
        var seconds = sec_num % 60;

        return [hours, minutes, seconds]
            .map(v => v < 10 ? '0' + v : v)
            .filter((v, i) => v !== '00' || i > 0)
            .join(' : ');
    };

    return (
        <View
            style={{
                width: '75%',
                height: heightPercentageToDP(8),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.grey3,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
              
            }}>
              
            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                {audioPlayState === 'loading' ? 

                    <ActivityIndicator color={COLORS.primary} size={'large'} /> :
                    <TouchableOpacity
                        onPress={() => {
                            if (audioPlayState === 'play') {
                                pausedAudio();
                            } else {
                                if (props?.url === undefined ||props?.url === null) {
                                    alert('No audio url of that language!')
                                    // dispatch({ type: 'AUDIOPLAYERSTATE', payload: 'play' })
                                }
                                else {
                                    playAudio();
                                }

                            }
                        }}
                        size={25}
                        color="green"
                        style={{
                            margin: 10,
                            alignSelf: 'center',
                        }}>

                        <Image
                            source={audioPlayState === 'play' ? IMAGES.PAUSEICON : IMAGES.PLAYICON}
                            resizeMode={'contain'}
                            style={{
                                width: widthPercentageToDP(9),
                                height: widthPercentageToDP(9),
                            }}
                        />
                    </TouchableOpacity>
                }

                <Slider
                    maximumValue={duration}
                    minimumValue={0}
                    minimumTrackTintColor={COLORS.primary}
                    maximumTrackTintColor="#000000"
                    step={0.1}
                    thumbTintColor={props.url && props.url.toString().startsWith('file') ? COLORS.lightBlack : COLORS.primaryColor}
                    value={parseFloat(sec.toFixed(1))}
                    onSlidingComplete={(async value => {
                        console.log('SliderVal: ', value);
                        await SoundPlayer.seek(value);
                    })}
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                    }}
                />

                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.h2,
                    color: COLORS.grey,
                    alignSelf: 'center', 
                    // margin: 10
                }}>{
                        audioPlayState == 'loading' ? 'Loading...' : toHHMMSS(sec)
                    }</Text>
            </View >
        </View>

    );
}


export default MyAudioPlayer;
