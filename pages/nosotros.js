import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout title={'Nosotros'} description="Sobre nosotros, guitarLA, tienda de música">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat mauris odio, in venenatis quam eleifend vel. Duis sed lacus tincidunt, varius dui eget, viverra massa. Etiam consectetur lorem sapien, vitae gravida nulla rhoncus vel. Ut ut interdum quam. Mauris eget malesuada massa. Quisque rutrum nisl sit amet risus ultricies, quis fermentum nisl dignissim. Sed id lectus ac est viverra ultrices sed non velit. Suspendisse semper velit rhoncus dignissim gravida. Curabitur interdum, metus vitae bibendum mattis, neque eros ultrices ipsum, vitae convallis mi sem vel quam. Curabitur consectetur efficitur eros.
            </p>
            <p>
              Aliquam varius justo sit amet fermentum auctor. Sed molestie nunc scelerisque lectus sollicitudin aliquam. Phasellus eu ultricies enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in velit ac ligula dignissim tempus ut sit amet purus. Nullam congue arcu ex, vitae accumsan tellus mattis sed. Mauris eu tellus ante. Pellentesque non neque venenatis erat ornare euismod vitae et neque.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
