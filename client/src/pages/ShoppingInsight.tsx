import DefaultLayout from '../components/@layout';
import ChartContainer from '../container/ChartContainer';
import FormContainer from '../container/FormContainer';

export default function ShoppingInsight() {
  return (
    <DefaultLayout>
      <FormContainer />
      <ChartContainer />
    </DefaultLayout>
  );
}
