import React from 'react';
import styled from 'styled-components';
import {EmptyProps} from '../../common/EmptyProps';

const Div = styled.div`
  margin: 40px;
`;

const margin0 = {
    margin: '0px',
} as React.CSSProperties;

const termsOfUseText = {
    border: 'solid 2px #eee',
    padding: '15px',
} as React.CSSProperties;

class TermsOfUse extends React.Component<EmptyProps> {
    public render(): React.ReactNode {
        return (
            <Div>
                <h3>Пользовательское соглашение</h3>

                <div className="col" style={termsOfUseText}>
                    <span>
                        Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем rushmyskills.ru
                           (далее RushMySkills или Администрация) с одной стороны и пользователем сайта с другой.
                        <p>Сайт RushMySkills не является средством массовой информации.</p>
                    </span>
                    <p/>
                    <span>
                        Используя сайт, Вы соглашаетесь с условиями данного соглашения.
                        <p><strong>Если Вы не согласны с условиями данного соглашения, не используйте сайт RushMySkills!</strong></p>
                    </span>
                    <p/>

                    <h5>Предмет соглашения</h5>
                    <span>
                        Администрация предоставляет пользователю право на размещение на сайте следующей информации:
                        <ol>
                            <li>Текстовой информации</li>
                            <li>Фотоматериалов</li>
                            <li>Ссылок на материалы, размещенные на других сайтах</li>
                        </ol>
                    </span>
                    <p/>

                    <h5>Права и обязанности сторон</h5>
                    <span>
                        Пользователь имеет право:
                        <ol>
                            <li>осуществлять поиск информации на сайте</li>
                            <li>получать информацию на сайте</li>
                            <li>создавать информацию для сайта</li>
                            <li>распространять информацию на сайте</li>
                            <li>комментировать контент, выложенный на сайте</li>
                            <li>изменять рейтинг пользователей</li>
                            <li>копировать информацию на другие сайты с указанием источника</li>
                            <li>копировать информацию на другие сайты с разрешения правообладателя</li>
                            <li>требовать от администрации скрытия любой информации о пользователе</li>
                            <li>требовать от администрации скрытия любой информации переданной пользователем сайту</li>
                            <li>использовать информацию сайта в личных некоммерческих целях</li>
                        </ol>
                    </span>

                    <span>
                        Администрация имеет право:
                        <ol>
                            <li>по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
                            <li>ограничивать доступ к любой информации на сайте</li>
                            <li>создавать, изменять, удалять информацию</li>
                            <li>удалять учетные записи</li>
                            <li>отказывать в регистрации без объяснения причин</li>
                        </ol>
                    </span>

                    <span>
                        Пользователь обязуется:
                        <ol>
                            <li>обеспечить достоверность предоставляемой информации</li>
                            <li>обеспечивать сохранность личных данных от доступа третьих лиц</li>
                            <li>не копировать информацию с других источников</li>
                            <li>не распространять информацию, которая направлена на пропаганду войны, разжигание национальной,
                                расовой или религиозной ненависти и вражды, а также иной информации, за распространение которой
                                предусмотрена уголовная или административная ответственность</li>
                            <li>не нарушать работоспособность сайта</li>
                            <li>не создавать несколько учётных записей на Сайте, если фактически они принадлежат одному и тому же лицу</li>
                            <li>не совершать действия, направленные на введение других Пользователей в заблуждение</li>
                            <li>не передавать в пользование свою учетную запись и/или логин и пароль своей учетной записи третьим лицам</li>
                            <li>не регистрировать учетную запись от имени или вместо другого лица за исключением случаев,
                                предусмотренных законодательством РФ</li>
                            <li>не размещать материалы рекламного, эротического, порнографического или оскорбительного характера,
                                а также иную информацию, размещение которой запрещено или противоречит нормам действующего
                                законодательства РФ</li>
                            <li>не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия
                                с Сайтом и его Сервисами</li>
                        </ol>
                    </span>

                    <span>
                        Администрация обязуется:
                        <ol>
                            <li>поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим
                                от Администрации причинам</li>
                            <li>осуществлять разностороннюю защиту учетной записи Пользователя</li>
                            <li>защищать информацию, распространение которой ограничено или запрещено законами путем вынесения
                                предупреждения либо удалением учетной записи пользователя, нарушившего правила</li>
                            <li>предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной
                                власти в случаях, установленных законом</li>
                        </ol>
                    </span>
                    <p/>

                    <h5>Ответственность сторон</h5>
                    <span>
                        <ol>
                            <li>пользователь лично несет полную ответственность за распространяемую им информацию</li>
                            <li>администрация не несет никакой ответственности за достоверность информации, скопированной из
                                других источников</li>
                            <li>администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально
                                полученных услуг</li>
                            <li>администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
                            <li>в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное
                                бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а
                                также бесперебойную работу информационного ресурса</li>
                        </ol>
                    </span>

                    <h5>Условия действия Соглашения</h5>
                    <span>
                        Данное Соглашение вступает в силу при любом использовании данного сайта.
                        <p style={margin0}>Соглашение перестает действовать при появлении его новой версии.</p>
                        Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.
                        <p>При любом изменении данного соглашения, администрация будет оповещать пользователей удобным для нее способом.</p>
                    </span>
                </div>
            </Div>
        );
    }
}

export default TermsOfUse;
