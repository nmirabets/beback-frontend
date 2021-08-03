import React, { Component } from 'react';

class ReactionStep2HeaderBuilder extends Component {

	render() {
		let header = "";
		const { dimension, isPositive } = this.props
        switch (dimension) {
          case "servicio":
            if (isPositive) {
              header = "¿Qué te ha gustado del servicio?"
            } else {
              header = "¿Qué ha fallado en el servicio?"
            }
            break;
          case "comida":
            if (isPositive) {
              header = "¿Qué plato te ha gustado?"
            } else {
              header = "¿Qué plato ha fallado?"
            }
            break;
          case "atmósfera":
            if (isPositive) {
              header = "¿Qué te ha gustado de la atmósfera?"
            } else {
              header = "¿Qué ha fallado en la atmósfera?"
            }
            break;
        }

		return (
			<>{header}</>
		);
	}
}

export default ReactionStep2HeaderBuilder;
