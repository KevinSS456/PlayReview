import React from "react"
import cardAção from '../assets/iconsEscolha/card terror.svg'
import '../style/escolha.css'

const Escolha= () => {
    return(
        <div className="conteinerEscolha">
            <div id="EscolhaTitleArea">
              <h1 className="loginTitle" id="EscolhaTitle">Escolha as preferencias</h1>
            </div>
            <div className="buttonsArea">
                <p>Escolha 3 dos seus Estilos Favoritos</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 90 90" fill="none" >
                <path d="M79.2857 42.8571H72.8571V25.7143C72.8571 23.441 71.9541 21.2608 70.3466 19.6534C68.7392 18.0459 66.559 17.1429 64.2857 17.1429H47.1429V10.7143C47.1429 7.87268 46.014 5.14746 44.0047 3.13814C41.9954 1.12882 39.2702 0 36.4286 0C33.587 0 30.8617 1.12882 28.8524 3.13814C26.8431 5.14746 25.7143 7.87268 25.7143 10.7143V17.1429H8.57143C6.29814 17.1429 4.11797 18.0459 2.51051 19.6534C0.903058 21.2608 0 23.441 0 25.7143V42H6.42857C12.8571 42 18 47.1429 18 53.5714C18 60 12.8571 65.1429 6.42857 65.1429H0V81.4286C0 83.7019 0.903058 85.882 2.51051 87.4895C4.11797 89.0969 6.29814 90 8.57143 90H24.8571V83.5714C24.8571 77.1429 30 72 36.4286 72C42.8571 72 48 77.1429 48 83.5714V90H64.2857C66.559 90 68.7392 89.0969 70.3466 87.4895C71.9541 85.882 72.8571 83.7019 72.8571 81.4286V64.2857H79.2857C82.1273 64.2857 84.8525 63.1569 86.8619 61.1476C88.8712 59.1383 90 56.413 90 53.5714C90 50.7298 88.8712 48.0046 86.8619 45.9953C84.8525 43.986 82.1273 42.8571 79.2857 42.8571Z" fill="white" hover='black'/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 80 92" fill="none">
                <path d="M34.2857 11.4286H22.8571V0H34.2857V11.4286ZM57.1429 0H45.7143V11.4286H57.1429V0ZM22.8571 57.1429H34.2857V45.7143H22.8571V57.1429ZM80 34.2857V22.8571H68.5714V34.2857H80ZM80 57.1429V45.7143H68.5714V57.1429H80ZM45.7143 57.1429H57.1429V45.7143H45.7143V57.1429ZM80 0H68.5714V11.4286H80V0ZM45.7143 22.8571V11.4286H34.2857V22.8571H45.7143ZM11.4286 34.2857V22.8571H22.8571V11.4286H11.4286V0H0V91.4286H11.4286V45.7143H22.8571V34.2857H11.4286ZM57.1429 45.7143H68.5714V34.2857H57.1429V45.7143ZM34.2857 34.2857V45.7143H45.7143V34.2857H34.2857ZM22.8571 22.8571V34.2857H34.2857V22.8571H22.8571ZM45.7143 34.2857H57.1429V22.8571H45.7143V34.2857ZM57.1429 11.4286V22.8571H68.5714V11.4286H57.1429Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 101 77" fill="none">
                <path d="M-6.5 -20.75H107.5V93.25H-6.5V-20.75Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 90 90" fill="none">
                <path d="M39.1949 0.000435783C37.1448 0.000435783 35.0947 0.0410312 33.0649 0.101924L34.3031 13.4172L21.9012 0.731153C15.548 1.2386 9.21516 2.0708 2.86198 3.26837L9.80379 9.03291L0.0608929 8.91113C7.18538 29.2494 1.46143 45.9747 0 68.2007L19.4249 89.6757C21.4547 89.4118 23.4641 89.1885 25.433 89.0059L29.797 80.4402L33.5724 86.2859L41.9959 79.4862L42.1583 88.2142C58.9851 88.1736 74.1678 90.0613 90 89.8178C84.276 75.0004 83.6671 60.6703 83.525 47.355L76.7659 43.4781L83.4033 36.5972C83.3221 32.2738 83.1394 28.0722 82.6725 24.0329L71.0217 24.175L81.2111 15.7109C80.4398 12.5647 79.3843 9.54035 77.9432 6.63778L71.9553 1.78663C61.0352 0.67026 50.115 -0.0198619 39.1949 0.000435783ZM51.1096 7.51058C53.2612 12.5343 55.3924 17.5579 57.544 22.5918C59.0663 20.4605 60.5683 18.3293 62.0907 16.198C65.3383 21.719 68.5859 27.2196 71.8336 32.7406L68.5453 34.6689L61.7862 23.1601L53.1597 35.2169L50.0744 33.0045L54.9459 26.2048L50.5007 15.7515L45.5074 23.8908L47.9432 28.4781L44.594 30.2643L40.8796 23.2616L35.8457 35.0749L32.3545 33.5728L38.9513 18.106L40.5142 14.4524C41.4885 16.3198 42.4628 18.1669 43.4574 20.014C45.9946 15.8326 48.5521 11.6696 51.1096 7.51058ZM11.5494 18.9382C12.9134 19.263 14.2693 19.6283 15.4466 20.014C15.0203 21.2115 14.6143 22.4091 14.1881 23.5864C13.0129 23.2616 11.8092 22.8962 10.7578 22.6324C11.0399 21.4145 11.2896 20.1763 11.5494 18.9382ZM19.2422 21.6581C20.521 22.4294 21.6779 23.1195 22.6928 24.2562L19.9526 26.8543C19.1407 26.1033 18.207 25.4335 17.3545 24.9463L19.2422 21.6581ZM25.0677 28.2142C25.4939 29.7163 25.4939 31.401 25.3924 32.7812L21.6373 32.2941C21.6576 31.2589 21.6982 30.2643 21.4344 29.3509L25.0677 28.2142ZM20.7645 35.4605L24.2558 36.9016C23.5859 38.2413 23.2206 39.4795 22.5101 40.5146L19.2016 38.6878C19.7294 37.5918 20.3383 36.4957 20.7645 35.4605ZM17.4154 42.382L21.0081 43.6202C20.7037 44.7163 20.3992 45.8935 20.2774 46.9084L16.502 46.5025C16.7659 44.9801 16.9283 43.6608 17.4154 42.382ZM59.594 45.9138C61.3193 46.1168 62.5575 46.5228 63.9986 47.355L62.0095 50.6026C61.1773 50.0343 60.1015 49.8313 59.2693 49.6892L59.594 45.9138ZM55.2909 46.2183C55.5142 47.4565 55.7984 48.6946 56.0825 49.9328C54.885 50.1966 53.7077 50.6026 52.7334 50.968L51.3532 47.4362C52.7131 46.949 54.0934 46.4822 55.2909 46.2183ZM47.5981 49.4456L49.8308 52.5106C48.6942 53.3225 47.4357 54.0938 46.4208 54.6621L44.6143 51.3333C45.6495 50.7447 46.7659 50.0546 47.5981 49.4456ZM20.5007 49.9937C20.8051 50.9477 21.3532 51.8611 21.9012 52.4497L19.1001 55.0072C17.9838 53.8502 17.1719 52.267 16.8268 50.9274L20.5007 49.9937ZM67.2463 50.6635C67.9567 51.9625 68.6265 53.2413 69.0122 54.5404L65.3992 55.677C64.9932 54.5809 64.5264 53.4849 64.0189 52.673L67.2463 50.6635ZM41.387 52.8759L42.7875 56.3874C41.4885 56.9355 40.1691 57.3617 39.0122 57.7068L37.9973 54.0532C39.1949 53.7284 40.2909 53.2819 41.387 52.8759ZM24.3775 54.1344C25.4533 54.4795 26.5697 54.8245 27.5643 54.9869C27.3207 56.2251 27.1583 57.4835 26.9959 58.742C25.5751 58.539 24.0528 58.0722 22.8349 57.585L24.3775 54.1344ZM34.5264 54.8448L35.0947 58.5999C33.6333 58.8638 32.3748 58.9247 31.0758 58.9855L30.9946 55.1899C32.1922 55.1493 33.3491 55.0275 34.5264 54.8448ZM69.9459 58.4984C70.1488 59.7975 70.2706 61.1168 70.3924 62.4159L66.5967 62.7203C66.5156 61.5025 66.4141 60.3049 66.1908 59.1073L69.9459 58.4984ZM56.2246 64.7501C60.0609 65.4605 65.3383 68.0383 70.2097 71.631C71.7118 69.6215 73.1326 67.4903 74.5331 65.3184L80.6428 67.9368C79.6888 70.4334 77.5981 73.133 74.8376 75.4876C78.2882 78.7758 81.1096 82.4903 82.3478 86.2454C79.5467 82.5715 76.0352 79.7907 72.138 77.5579C67.3884 80.765 61.4411 82.815 55.9811 81.6987C60.6292 80.8056 64.2219 78.3293 67.3072 75.0816C63.958 73.5593 60.4466 72.2602 56.8945 71.0018L56.2246 64.7501Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 80 80" fill="none">
                <path d="M68.2 78.8L56.5 67.2L47.7 76L44.9 73.2C43.3667 71.6667 42.6 69.7667 42.6 67.5C42.6 65.2333 43.3667 63.3333 44.9 61.8L61.8 44.9C63.3333 43.3667 65.2333 42.6 67.5 42.6C69.7667 42.6 71.6667 43.3667 73.2 44.9L76 47.7L67.2 56.5L78.8 68.2C79.6 69 80 69.9333 80 71C80 72.0667 79.6 73 78.8 73.8L73.8 78.8C73 79.6 72.0667 80 71 80C69.9333 80 69 79.6 68.2 78.8ZM80 16L34.6 61.4L35.1 61.8C36.6333 63.3333 37.4 65.2333 37.4 67.5C37.4 69.7667 36.6333 71.6667 35.1 73.2L32.3 76L23.5 67.2L11.8 78.8C11 79.6 10.0667 80 9 80C7.93333 80 7 79.6 6.2 78.8L1.2 73.8C0.4 73 0 72.0667 0 71C0 69.9333 0.4 69 1.2 68.2L12.8 56.5L4 47.7L6.8 44.9C8.33333 43.3667 10.2333 42.6 12.5 42.6C14.7667 42.6 16.6667 43.3667 18.2 44.9L18.6 45.4L64 0H80V16ZM19.8 35.8L0 16V0H16L35.8 19.8L19.8 35.8Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 90 94" fill="none">
                <path d="M45 0.25C33.0694 0.263647 21.6314 5.00909 13.1953 13.4453C4.75909 21.8814 0.0136471 33.3194 8.43689e-08 45.25V90.25C-0.000150528 90.9602 0.201352 91.6558 0.581063 92.2559C0.960775 92.856 1.50308 93.336 2.1449 93.6399C2.78671 93.9439 3.50165 94.0594 4.20652 93.9729C4.91139 93.8865 5.57723 93.6016 6.12656 93.1516L17.4984 83.8469L28.875 93.1516C29.5449 93.6995 30.3837 93.9989 31.2492 93.9989C32.1147 93.9989 32.9535 93.6995 33.6234 93.1516L45 83.8469L56.3766 93.1516C57.0465 93.6995 57.8853 93.9989 58.7508 93.9989C59.6163 93.9989 60.4551 93.6995 61.125 93.1516L72.5016 83.8469L83.8734 93.1516C84.4228 93.6016 85.0886 93.8865 85.7935 93.9729C86.4984 94.0594 87.2133 93.9439 87.8551 93.6399C88.4969 93.336 89.0392 92.856 89.4189 92.2559C89.7987 91.6558 90.0002 90.9602 90 90.25V45.25C89.9864 33.3194 85.2409 21.8814 76.8047 13.4453C68.3686 5.00909 56.9306 0.263647 45 0.25ZM31.875 49C30.7625 49 29.6749 48.6701 28.7499 48.052C27.8249 47.4339 27.1039 46.5554 26.6782 45.5276C26.2524 44.4998 26.141 43.3688 26.3581 42.2776C26.5751 41.1865 27.1109 40.1842 27.8975 39.3975C28.6842 38.6109 29.6865 38.0751 30.7776 37.8581C31.8688 37.641 32.9998 37.7524 34.0276 38.1782C35.0554 38.6039 35.9339 39.3249 36.552 40.2499C37.1701 41.1749 37.5 42.2625 37.5 43.375C37.5 44.8668 36.9074 46.2976 35.8525 47.3525C34.7976 48.4074 33.3668 49 31.875 49ZM58.125 49C57.0125 49 55.9249 48.6701 54.9999 48.052C54.0749 47.4339 53.3539 46.5554 52.9282 45.5276C52.5024 44.4998 52.391 43.3688 52.6081 42.2776C52.8251 41.1865 53.3609 40.1842 54.1475 39.3975C54.9342 38.6109 55.9365 38.0751 57.0276 37.8581C58.1188 37.641 59.2498 37.7524 60.2776 38.1782C61.3054 38.6039 62.1839 39.3249 62.802 40.2499C63.4201 41.1749 63.75 42.2625 63.75 43.375C63.75 44.8668 63.1574 46.2976 62.1025 47.3525C61.0476 48.4074 59.6168 49 58.125 49Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}
export default Escolha