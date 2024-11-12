import { View, Text, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native'
import React, { Fragment } from 'react'
import { MyStatusBar } from '../../constants/config';
import { WHITE } from '../../constants/color';
import { appStyles } from '../../styles/AppStyles';
import { Loader } from '../../components/Loader';

const DashBoard = ({ navigation }) => {
    return (
        <Fragment>
            <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
            <SafeAreaView style={appStyles.safeareacontainer}>
                {/* <Loader visible={loader} /> */}

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}>

                    <ScrollView
                        keyboardShouldPersistTaps={'handled'}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            alignItems: 'center',
                            paddingBottom: 20, // Adjust padding bottom to ensure space for scrolling
                        }}>
                        {/* Your dashboard code */}



                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Fragment>
    )
}

export default DashBoard