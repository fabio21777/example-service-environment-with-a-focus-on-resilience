package com.fsm.order.controllers.exception;


public class CallNotPermittedExceptionCircuit extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public CallNotPermittedExceptionCircuit(String msg) {
		super(msg);
	}

}
