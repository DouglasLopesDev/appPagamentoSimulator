import {api, getConfigHeaders} from "./api"
// import {api} from "./api"
var qs = require('qs');

const generateTokenCard = async () => {
    const header = await getConfigHeaders()
    const config = {
        method: 'POST',
        url: 'v1/tokens/card',
        data : {
            "card_number": "5155901222280001",
        },
        headers: header, 
    }
    return api(config)
        .then((res) => { return {number_token: res.data.number_token, headers: header}})
        .catch((error) => { 
            console.log("criptografia", error)
            throw new Error("Falha na criptografia do cartão");
         })

}

const validateCard = () => {

} 

const paymentCreditCard = async (number_token : string, number_installments: number, amount: number, header:any) => {
    const headera = await getConfigHeaders()

    console.log("amount ", amount)
    console.log("number_token ", number_token)
    console.log("number_installments ", number_installments)

    const config = {
        headers: headera, 
        method: 'POST',
        url: 'v1/payments/credit',
        data: 
        // {
        //     "seller_id": "cadc50ba-3f0c-4e8f-8403-1f0d0ff2bfc2",
        //     "amount": amount,
        //     "currency": "BRL",
        //     "order": {
        //       "order_id": "6d2e4380-d8a3-4ccb-9138-c289182818a3",
        //       "sales_tax": 0,
        //       "product_type": "service"
        //     },
        //     "customer": {
        //       "customer_id": "customer_21081826",
        //       "first_name": "João",
        //       "last_name": "da Silva",
        //       "name": "João da Silva",
        //       "email": "customer@email.com.br",
        //       "document_type": "CPF",
        //       "document_number": "12345678912",
        //       "phone_number": "5551999887766",
        //       "billing_address": {
        //         "street": "Av. Brasil",
        //         "number": "1000",
        //         "complement": "Sala 1",
        //         "district": "São Geraldo",
        //         "city": "Porto Alegre",
        //         "state": "RS",
        //         "country": "Brasil",
        //         "postal_code": "90230060"
        //       }
        //     },
        //     "device": {
        //       "ip_address": "127.0.0.1",
        //       "device_id": "hash-device-id"
        //     },
        //     "shippings": [
        //       {
        //         "first_name": "João",
        //         "name": "João da Silva",
        //         "email": "customer@email.com.br",
        //         "phone_number": "5551999887766",
        //         "shipping_amount": 3000,
        //         "address": {
        //           "street": "Av. Brasil",
        //           "number": "1000",
        //           "complement": "Sala 1",
        //           "district": "São Geraldo",
        //           "city": "Porto Alegre",
        //           "state": "RS",
        //           "country": "Brasil",
        //           "postal_code": "90230060"
        //         }
        //       }
        //     ],
        //     "sub_merchant": {
        //       "identification_code": "9058344",
        //       "document_type": "CNPJ",
        //       "document_number": "20551625000159",
        //       "address": "Torre Negra 44",
        //       "city": "Cidade",
        //       "state": "RS",
        //       "postal_code": "90520000"
        //     },
        //     "credit": {
        //       "delayed": false,
        //       "pre_authorization": false,
        //       "save_card_data": false,
        //       "transaction_type": "INSTALL_NO_INTEREST",
        //       "number_installments": number_installments,
        //       "soft_descriptor": "LOJA*TESTE*COMPRA-123",
        //       "dynamic_mcc": 1799,
        //       "card": {
        //         "number_token": number_token.toString(),
        //         "cardholder_name": "JOAO DA SILVA",
        //         "security_code": "123",
        //         "brand": "Mastercard",
        //         "expiration_month": "12",
        //         "expiration_year": "28"
        //       }
        //     },
        //     "tokenization": {
        //       "type": "ELO",
        //       "cryptogram": "string",
        //       "eci": "01",
        //       "requestor_id": [
        //         {}
        //       ]
        //     },
        //     "wallet": {
        //       "type": "string",
        //       "id": "string"
        //     }
        //   }
        {
            "seller_id": "cadc50ba-3f0c-4e8f-8403-1f0d0ff2bfc2",
            "amount": 100,
            "currency": "BRL",
            "order": {
              "order_id": "6d2e4380-d8a3-4ccb-9138-c289182818a3",
              "sales_tax": 0,
              "product_type": "service"
            },
            "customer": {
              "customer_id": "customer_21081826",
              "first_name": "João",
              "last_name": "da Silva",
              "name": "João da Silva",
              "email": "customer@email.com.br",
              "document_type": "CPF",
              "document_number": "12345678912",
              "phone_number": "5551999887766",
              "billing_address": {
                "street": "Av. Brasil",
                "number": "1000",
                "complement": "Sala 1",
                "district": "São Geraldo",
                "city": "Porto Alegre",
                "state": "RS",
                "country": "Brasil",
                "postal_code": "90230060"
              }
            },
            "device": {
              "ip_address": "127.0.0.1",
              "device_id": "hash-device-id"
            },
            "shippings": [
              {
                "first_name": "João",
                "name": "João da Silva",
                "email": "customer@email.com.br",
                "phone_number": "5551999887766",
                "shipping_amount": 3000,
                "address": {
                  "street": "Av. Brasil",
                  "number": "1000",
                  "complement": "Sala 1",
                  "district": "São Geraldo",
                  "city": "Porto Alegre",
                  "state": "RS",
                  "country": "Brasil",
                  "postal_code": "90230060"
                }
              }
            ],
            "sub_merchant": {
              "identification_code": "9058344",
              "document_type": "CNPJ",
              "document_number": "20551625000159",
              "address": "Torre Negra 44",
              "city": "Cidade",
              "state": "RS",
              "postal_code": "90520000"
            },
            "credit": {
              "delayed": false,
              "pre_authorization": false,
              "save_card_data": false,
              "transaction_type": "INSTALL_NO_INTEREST",
              "number_installments": 3,
              "soft_descriptor": "LOJA*TESTE*COMPRA-123",
              "dynamic_mcc": 1799,
              "card": {
                "number_token": "b824d023bd6f43c1544421a0765ad2f34c90d1b9b4d76c023a29af86465e81e25c15eff51050f63b1e95016b402682f63a74d9948fba827c238da9c3d4677b18",
                "cardholder_name": "JOAO DA SILVA",
                "security_code": "123",
                "brand": "Mastercard",
                "expiration_month": "12",
                "expiration_year": "28"
              }
            },
            "tokenization": {
              "type": "ELO",
              "cryptogram": "string",
              "eci": "01",
              "requestor_id": [
                {}
              ]
            },
            "wallet": {
              "type": "string",
              "id": "string"
            }
          }
    }
    console.log("config", config.data.credit)
    console.log("config", config.data.credit.card)

    return api(config)
        .then((res) => { return "Pagamento aprovado"})
        .catch((error) => {
            console.log("erro no pagamento: ", error)
            throw new Error("Falha na realização do pagamento");
         })

}

export {
    generateTokenCard,
    validateCard,
    paymentCreditCard
}
