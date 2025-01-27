//products
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'Product ID',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Quantity',
      },
      {
        name: 'image',
        type: 'url',
        title: 'Image URL',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
    ],
  };

//orders
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Status',
      },
      {
        name: 'customer',
        type: 'object',
        title: 'Customer',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          {
            name: 'email',
            type: 'string',
            title: 'Email',
          },
        ],
      },
    ],
  };

//shipment
export default {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      {
        name: 'shipmentId',
        type: 'string',
        title: 'Shipment ID',
      },
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Status',
        options: {
          list: [
            { title: 'Pending', value: 'Pending' },
            { title: 'In Transit', value: 'In Transit' },
            { title: 'Delivered', value: 'Delivered' },
          ],
        },
      },
      {
        name: 'expectedDeliveryDate',
        type: 'datetime',
        title: 'Expected Delivery Date',
      },
    ],
  };
  