import React, { Component } from 'react';

class SubdimensionHeader extends Component {

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
          case "ambiente y local":
            if (isPositive) {
              header = "¿Qué te ha gustado del ambiente y local?"
            } else {
              header = "¿Qué ha fallado en el ambiente y local?"
            }
            break;
        }

		return (
			<h1>{header}</h1>
		);
	}
}

export default SubdimensionHeader;
