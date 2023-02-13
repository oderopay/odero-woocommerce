<?php

namespace Oderopay\Model\Webhook;

class Payment extends BaseWebhook
{

    /**
     * @return bool
     */
    public function isDepositMade(): bool
    {
        return $this->data['depositMade'] ?? false;
    }


    /**
     * @return mixed|null
     */
    public function getCardToken()
    {
        return $this->data['cardToken'] ?? null;
    }


    /**
     * @return mixed|null
     */
    public function getLastFourDigits()
    {
        return $this->data['lastFourDigits'] ?? null;
    }

    /**
     * @return mixed|null
     */
    public function getExpirationMonth()
    {
        return $this->data['expirationMonth'] ?? null;
    }


    /**
     * @return mixed|null
     */
    public function getExpirationYear()
    {
        return $this->data['expirationYear'] ?? null;
    }

}
