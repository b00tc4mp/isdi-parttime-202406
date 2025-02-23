/* eslint-disable react/prop-types */
const CustomCalendarBar = (props) => { // Recibe 'props', y dentro 'props' estará 'toolbar'
    const { toolbar } = props; // Extraemos el objeto 'toolbar' de las props

    return (
        <div style={{ backgroundColor: '#A5D6A7', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#424242', fontWeight: 'bold' }}>{toolbar.label}</span>
            <div>
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.onNavigate('PREV')}>Anterior</button>
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.onNavigate('NEXT')}>Siguiente</button>
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.today()}>Hoy</button>

                {/* BOTONES DE VISTA - ¡COMPRUEBA ESTOS CON MÁXIMO CUIDADO! */}
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.view('month')}>Mes</button>
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.view('week')}>Semana</button>
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.view('day')}>Día</button>
                <button style={{ backgroundColor: '#E0F7FA', color: '#424242', border: 'none', padding: '8px', margin: '0 5px', cursor: 'pointer' }} onClick={() => toolbar.view('agenda')}>Agenda</button>
            </div>
        </div>
    );
};

export default CustomCalendarBar;