import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function Contacto() {
    return  (
        <>
            <h1>Proximamente Contacto</h1>
        </>
    );
  }
  
  Contacto.getLayout = function getLayout( page ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
  }

