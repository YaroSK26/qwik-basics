import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline"
import Modal from "~/components/modal/modal";


export default component$(()=> {
  useStyles$(AboutStyles);
  //useStylesScoped$(AboutStyles)  bude fungovat len na tu jednu page 

  const modalVisible = useSignal(false)
  return (
    <div>
      <h2>ABOUT</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
        beatae? Quaerat in explicabo maiores porro pariatur nisi ducimus fuga,
        qui quam non. Fuga repudiandae nostrum molestiae distinctio nisi quaerat
        praesentium!
      </p>
      <button onClick$={() => {modalVisible.value = true}}>open modal</button>


        {modalVisible.value && (
          <Modal></Modal>
)}
    </div>
  );
})