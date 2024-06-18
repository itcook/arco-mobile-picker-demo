import { Picker, Form } from '@arco-design/mobile-react'
function App() {
  return (
    <>
      <Form>
        <Form.Item label='PickerInForm' field='gender'>
          <Picker
            cascade={false}
            data={[
              { label: '男', value: 'male' },
              { label: '女', value: 'female' },
            ]}
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default App
