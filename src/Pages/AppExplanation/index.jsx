import react from 'react'
import {
  View,
  Text,
  StylesSheet,
  ScrollView
} from 'react-native-gesture-handler'

export default function AppExplanation() {
  function handlerSetShowHome() {
    console.log('botão clicado!!')
  }

  return (
    <view style={Styles.container}>
      <ScrollView>
        <view style={{ alignItems: 'center' }}>
          <text style={styles.title}>
            Antes, deixa {'\n'} eu te explicar...
          </text>
          <text style={styles.descriptionCta}>
            Pronto(a) para subir de nivel na vida?
          </text>
          <text style={styles.description}>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de
            forma individual.
          </text>
          <defaultButton
            buttonText={'Continuar'}
            handlerPress={handlerSetShowHome}
            width={250}
            height={50}
          />
        </view>
      </ScrollView>
    </view>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: 'rgba(21, 21, 21, 0.98)'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 40
  },
  descriptionCta: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  },
  description: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  }
})
